# Crypto[2024-9]
## Malicious Security for SCALES - Outsourced Computation with Ephemeral Servers.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#malicious-security-for-scales-outsourced-computation-with-ephemeral-servers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#malicious-security-for-scales-outsourced-computation-with-ephemeral-servers)
### Authors
* Anasuya Acharaya, Bar-Ilan University, Ramat Gan, Israel
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, Georgia
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
### Abstract
> SCALES (Small Clients And Larger Ephemeral Servers) model is a recently proposed model for MPC (Acharya et al., TCC 2022). While the SCALES model offers several attractive features for practical large-scale MPC, the result of Acharya et al. only offered semi-honest secure protocols in this model.
> 
> We present a new efficient SCALES protocol secure against malicious adversaries, for general Boolean circuits. We start with the base construction of Acharya et al. and design and use a suite of carefully defined building blocks that may be of independent interest. The resulting protocol is UC-secure without honest majority, with a CRS and bulletin-board as setups, and allows publicly identifying deviations from correct execution.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_1](https://doi.org/10.1007/978-3-031-68400-5_1)
## 10-Party Sublinear Secure Computation from Standard Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#10-party-sublinear-secure-computation-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#10-party-sublinear-secure-computation-from-standard-assumptions)
### Authors
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Naman Kumar, Oregon State University, Corvallis, USA
### Abstract
> Secure computation enables mutually distrusting parties to jointly compute a function on their secret inputs, while revealing nothing beyond the function output. A long-running challenge is understanding the required communication complexity of such protocols – in particular, when communication can be sublinear in the circuit representation size of the desired function. While several techniques have demonstrated the viability of sublinear secure computation in the two-party setting, known methods for the corresponding multi-party setting rely either on fully homomorphic encryption, non-standard hardness assumptions, or are limited to a small number of parties. In this work, we expand the study of multi-party sublinear secure computation by demonstrating sublinear-communication 10-party computation from various combinations of standard hardness assumptions. In particular, our contributions show:
> 
> 8-party homomorphic secret sharing under the hardness of (DDH or DCR), the superpolynomial hardness of LPN, and the existence of constant-depth pseudorandom generators;
> 
> A general framework for achieving \((N+M)\)-party sublinear secure computation using M-party homomorphic secret sharing for \(\ensuremath {\textsf{NC}} ^1\) and correlated symmetric PIR.
> 
> Together, our constructions imply the existence of a 10-party MPC protocol with sublinear computation. At the core of our techniques lies a novel series of computational approaches based on homomorphic secret sharing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_2](https://doi.org/10.1007/978-3-031-68400-5_2)
## Privacy-Preserving Dijkstra.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#privacy-preserving-dijkstra)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#privacy-preserving-dijkstra)
### Authors
* Benjamin Ostrovsky, California Institute of Technology, Pasadena, CA, USA
### Abstract
> Given a graph G(V, E), represented as a secret-sharing of an adjacency list, we show how to obliviously convert it into an alternative, MPC-friendly secret-shared representation, so-called d-normalized replicated adjacency list (which we abbreviate to d-normalized), where the size of our new data-structure is only 4x larger – compared to the original (secret-shared adjacency list) representation of G. Yet, this new data structure enables us to execute oblivious graph algorithms that simultaneously improve underlying graph algorithms’ round, computation, and communication complexity. Our d-normalization proceeds in two steps:
> 
> First, we show how for any graph G, given a secret-shared adjacency list, where vertices are arbitrary alphanumeric strings that fit into a single RAM memory word, we can efficiently and securely rename vertices to integers from 1 to V that will appear in increasing order in the resulting secret-shared adjacency list. The secure renaming takes \(O(\log V)\) rounds and \(O((V+E)\log V)\) secure operations. Our algorithm also outputs in a secret-shared form two arrays: a mapping from integers to alphanumeric names and its sorted inverse. Of course, if the adjacency list is already in such an integer format, this step could be skipped. Second, given a secret-shared adjacency list for any graph G, where vertices are integers from 1 to V and are sorted, there exists a d-normalization algorithm that takes O(1) rounds and \(O(V+E)\) secure operations.
> 
> We believe that both conversions are of independent interest. We demonstrate the power of our data structures by designing a privacy-preserving Dijkstra’s single-source shortest-path algorithm that achieves \(O\left( (V +E) \log V \right) \) secure operations and \(O(V \cdot \log V \cdot \log \log \log V)\) rounds. Our secure Dijkstra algorithm works for any adjacency list representation as long as all vertex labels and weights can individually fit into RAM memory word. Our algorithms work for two or a constant number of servers in the honest but curious setting. The limitation of our result (to only a constant number of servers) is due to our reliance on linear work and constant-round secure shuffle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_3](https://doi.org/10.1007/978-3-031-68400-5_3)
## Fully Malicious Authenticated PIR.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#fully-malicious-authenticated-pir)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#fully-malicious-authenticated-pir)
### Authors
* Marian Dietz, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> Authenticated PIR enables a server to initially commit to a database of N items, for which a client can later privately obtain individual items with complexity sublinear in N, with the added guarantee that the retrieved item is consistent with the committed database. A crucial requirement is privacy with abort, i.e., the server should not learn anything about a query even if it learns whether the client aborts.
> 
> This problem was recently considered by Colombo et al. (USENIX ’23), who proposed solutions secure under the assumption that the database is committed to honestly. Here, we close this gap for their DDH-based scheme, and present a solution that tolerates fully malicious servers that provide potentially malformed commitments. Our scheme has communication and client computational complexity \(\mathcal {O}_{\lambda }(\sqrt{N})\), does not require any additional assumptions, and does not introduce heavy machinery (e.g., generic succinct proofs). We do so by introducing validation queries, which, from the server’s perspective, are computationally indistinguishable from regular PIR queries. Provided that the server succeeds in correctly answering \(\kappa \) such validation queries, the client is convinced with probability \(1-\frac{1}{2^\kappa }\) that the server is unable to break privacy with abort.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_4](https://doi.org/10.1007/978-3-031-68400-5_4)
## PIR with Client-Side Preprocessing: Information-Theoretic Constructions and Lower Bounds.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#pir-with-client-side-preprocessing-information-theoretic-constructions-and-lower-bounds)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#pir-with-client-side-preprocessing-information-theoretic-constructions-and-lower-bounds)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Elaine Shi, CMU, Pittsburgh, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### Abstract
> It is well-known that classical Private Information Retrieval (PIR) schemes without preprocessing must suffer from linear server computation per query. Moreover, any such single-server PIR with sublinear bandwidth must rely on public-key cryptography. Several recent works showed that these barriers pertaining to classical PIR can be overcome by introducing a preprocessing phase where each client downloads a small hint that helps it make queries subsequently. Notably, the Piano PIR scheme (and subsequent improvements) showed that with such a client-side preprocessing, not only can we have PIR with sublinear computation and bandwidth per query, but somewhat surprisingly, we can also get it using only symmetric-key cryptography (i.e., one-way functions).
> 
> In this paper, we take the question of minimizing cryptographic assumptions to an extreme. In particular, we are the first to explore the landscape of information theoretic single-server preprocessing PIR. We make contributions on both the upper- and lower-bounds fronts. First, we show new information-theoretic constructions with various non-trivial performance tradeoffs between server computation, client space and bandwidth. Second, we prove a (nearly) tight lower bound on the tradeoff between the client space and bandwidth in information-theoretic constructions. Finally, we prove that any computational scheme that overcomes the information-theoretic lower bound and satisfies a natural syntactic requirement (which is met by all known constructions) would imply a hard problem in the complexity class SZK. In particular, this shows that Piano achieves (nearly) optimal client space and bandwidth tradeoff subject to making a black-box use of a one-way function. Some of the techniques we use for the above results can be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_5](https://doi.org/10.1007/978-3-031-68400-5_5)
## Hintless Single-Server Private Information Retrieval.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#hintless-single-server-private-information-retrieval)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#hintless-single-server-private-information-retrieval)
### Authors
* Baiyu Li, Google, Mountain View, USA
* Mariana Raykova, Google, Mountain View, USA
* Daniele Micciancio, UCSD, San Diego, USA
* Mark Schultz-Wu, UCSD, San Diego, USA
### Abstract
> We present two new constructions for private information retrieval (PIR) in the classical setting where the clients do not need to do any preprocessing or store any database dependent information, and the server does not need to store any client-dependent information.
> 
> Our first construction (\({\textsf{Hintless}\textsf{PIR}}\)) eliminates the client preprocessing step from the recent LWE-based SimplePIR (Henzinger et al., USENIX Security 2023) by outsourcing the “hint” related computation to the server, leveraging a new concept of homomorphic encryption with composable preprocessing. We realize this concept with RLWE encryption schemes, and by leveraging the composibility of this technique we are able to preprocess almost all the expensive parts of the homomorphic computation and reuse them across multiple protocol executions. As a concrete application, we propose highly efficient matrix vector multiplication that allows us to build \({\textsf{Hintless}\textsf{PIR}}\). For a database of size 8 GB, \({\textsf{Hintless}\textsf{PIR}}\) achieves throughput about 6.37 GB/s without requiring transmission of any client or server state. We additionally formalize the matrix vector multiplication protocol as a novel primitive that we call \(\textsf{LinPIR}\), which may be of independent interest.
> 
> In our second construction (\(\textsf{Tensor}\textsf{PIR}\)) we reduce the communication of \({\textsf{Hintless}\textsf{PIR}}\) from square root to cubic root in the database size. We show how to use RLWE encryption with preprocessing to outsource LWE decryption for ciphertexts generated by homomorphic multiplications. This allows the server to do more complex processing using a more compact query under LWE.
> 
> We implement and benchmark \({\textsf{Hintless}\textsf{PIR}}\) which achieves better concrete costs than \(\textsf{Tensor}\textsf{PIR}\) for a large set of databases of interest. We show that it improves the communication of recent preprocessing constructions when clients do not have large numbers of queries or the database updates frequently. The computation cost for removing the hint is small and decreases as the database becomes larger, and it is always more efficient than other constructions with client hints such as Spiral PIR (Menon and Wu, S&P 2022). In the setting of anonymous queries we also improve on Spiral’s communication.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_6](https://doi.org/10.1007/978-3-031-68400-5_6)
## On Cycles of Pairing-Friendly Abelian Varieties.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#on-cycles-of-pairing-friendly-abelian-varieties)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#on-cycles-of-pairing-friendly-abelian-varieties)
### Authors
* Maria Corte-Real Santos, University College London, London, UK
* Craig Costello, Microsoft Research, Redmond, USA
* Michael Naehrig, Microsoft Research, Redmond, USA
### Abstract
> One of the most promising avenues for realising scalable proof systems relies on the existence of 2-cycles of pairing-friendly elliptic curves. Such a cycle consists of two elliptic curves \(\ensuremath {\mathcal {E}}/\ensuremath {\mathbb {F}}_p\) and \(\ensuremath {\mathcal {E}}'/\ensuremath {\mathbb {F}}_q\) that both have a low embedding degree and also satisfy \(q = \#\ensuremath {\mathcal {E}}(\ensuremath {\mathbb {F}}_p)\) and \(p = \#\ensuremath {\mathcal {E}}'(\ensuremath {\mathbb {F}}_q)\). These constraints turn out to be rather restrictive; in the decade that has passed since 2-cycles were first proposed for use in proof systems, no new constructions of 2-cycles have been found.
> 
> In this paper, we generalise the notion of cycles of pairing-friendly elliptic curves to study cycles of pairing-friendly abelian varieties, with a view towards realising more efficient pairing-based SNARKs. We show that considering abelian varieties of dimension larger than 1 unlocks a number of interesting possibilities for finding pairing-friendly cycles, and we give several new constructions that can be instantiated at any security level.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_7](https://doi.org/10.1007/978-3-031-68400-5_7)
## Oblivious Issuance of Proofs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#oblivious-issuance-of-proofs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#oblivious-issuance-of-proofs)
### Authors
* Michele Orrù, CNRS, Paris, France
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Greg Zaverucha, Microsoft Research, Redmond, USA
### Abstract
> We consider the problem of issuing zero-knowledge proofs obliviously. In this setting, a prover interacts with a verifier to produce a proof, known only to the verifier. The resulting proof cannot be linked back to the interaction that produced it, and can be verified non-interactively by anyone. This notion generalizes common approaches to designing blind signatures, which can be seen as the special case of proving “knowledge of a signing key”, and extends the seminal work of Camenisch and Stadler (’97).
> 
> We propose two provably-secure constructions of oblivious proofs, and give three applications of our framework. First, we give a publicly verifiable version of the classical Diffie-Hellman based Oblivious PRF. This yields new constructions of blind signatures and publicly verifiable anonymous tokens. Second, we show how to “upgrade” keyed-verification anonymous credentials (Chase et al., CCS’14) to also be concurrently secure blind signatures on the same set of attributes. Our upgrade maintains the performance and functionality of the credential in the keyed-verification setting, we only change issuance. Finally, we provide a variation of the U-Prove credential system that is provably one-more unforgeable with concurrent issuance sessions. This constitutes a fix for the attack illustrated by Benhamouda et al. (EUROCRYPT’21).
> 
> Beyond these example applications, as our results are quite general, we expect they may enable modular design of new primitives with concurrent security, a goal that has historically been challenging to achieve.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_8](https://doi.org/10.1007/978-3-031-68400-5_8)
## Resettable Statistical Zero-Knowledge for $\ensuremath {\textsf{NP}}$.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#resettable-statistical-zero-knowledge-for-ensuremath-textsf-np)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#resettable-statistical-zero-knowledge-for-ensuremath-textsf-np)
### Authors
* Susumu Kiyoshima, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> Resettable statistical zero-knowledge [Garg–Ostrovsky–Visconti–Wadia, TCC 2012] is a strong privacy notion that guarantees statistical zero-knowledge even when the prover uses the same randomness in multiple proofs.
> 
> In this paper, we show an equivalence of resettable statistical zero-knowledge arguments for \(\ensuremath {\textsf{NP}}\) and witness encryption schemes for \(\ensuremath {\textsf{NP}}\).
> 
> Positive result: For any \(\ensuremath {\textsf{NP}}\) language \({\textbf {L}}\), a resettable statistical zero-knowledge argument for \({\textbf {L}}\) can be constructed from a witness encryption scheme for \({\textbf {L}}\) under the assumption of the existence of one-way functions.
> 
> Negative result: The existence of even resettable statistical witness-indistinguishable arguments for \(\ensuremath {\textsf{NP}}\) imply the existence of witness encryption schemes for \(\ensuremath {\textsf{NP}}\) under the assumption of the existence of one-way functions.
> 
> The positive result is obtained by naturally extending existing techniques (and is likely to be already well-known among experts). The negative result is our main technical contribution.
> 
> To explore workarounds for the negative result, we also consider resettable security in a model where the honest party’s randomness is only reused with fixed inputs. We show that resettable statistically hiding commitment schemes are impossible even in this model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_9](https://doi.org/10.1007/978-3-031-68400-5_9)
## Non-interactive Zero-Knowledge from LPN and MQ.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#non-interactive-zero-knowledge-from-lpn-and-mq)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#non-interactive-zero-knowledge-from-lpn-and-mq)
### Authors
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Zhengzhong Jin, MIT, Cambridge, USA
### Abstract
> We give the first construction of non-interactive zero-knowledge (NIZK) arguments from post-quantum assumptions other than Learning with Errors. In particular, we achieve NIZK under the polynomial hardness of the Learning Parity with Noise (LPN) assumption, and the exponential hardness of solving random underdetermined multivariate quadratic equations (MQ). We also construct NIZK satisfying statistical zero-knowledge assuming a new variant of LPN, Dense-Sparse LPN, introduced by Dao and Jain (Crypto 2024), together with exponentially-hard MQ.
> 
> The main technical ingredient of our construction is an extremely natural (but only in hindsight!) construction of correlation-intractable (CI) hash functions from MQ, for a NIZK-friendly sub-class of constant-degree polynomials that we call concatenated constant-degree polynomials. Under exponential security, this hash function also satisfies the stronger notion of approximate CI for concatenated constant-degree polynomials. The NIZK construction then follows from a prior blueprint of Brakerski-Koppula-Mour (CRYPTO 2020). In addition, we show how to construct (approximate) CI hashing for degree-d functions from the (exponential) hardness of solving random degree-d equations, a natural generalization of MQ. To realize NIZK with statistical zero-knowledge, we design a lossy public-key encryption scheme with approximate linear decryption and inverse-polynomial decryption error from Dense-Sparse LPN. These constructions may be of independent interest.
> 
> Our work therefore gives a new way to leverage MQ with uniformly random equations, which has found little cryptographic applications to date. Indeed, most applications in the context of encryption and signature schemes make use of structured variants of MQ, where the polynomials are not truly random but posses a hidden planted structure. We believe that the MQ assumption may plausibly find future use in the designing other advanced proof systems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_10](https://doi.org/10.1007/978-3-031-68400-5_10)
## Amplification of Non-interactive Zero Knowledge, Revisited.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#amplification-of-non-interactive-zero-knowledge-revisited)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#amplification-of-non-interactive-zero-knowledge-revisited)
### Authors
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Nathan Geier, Tel Aviv University, Tel Aviv, Israel
* Nir Bitansky, New York University, New York, NY, USA
### Abstract
> In an \((\varepsilon _s,\varepsilon _z)\)-weak non-interactive zero knowledge (NIZK), the soundness error is at most \(\varepsilon _s\) and the zero-knowledge error is at most \(\varepsilon _z\). Goyal, Jain, and Sahai (CRYPTO 2019) stated that if \(\varepsilon _s+\varepsilon _z < 1\) for some constants \(\varepsilon _s,\varepsilon _z\), then \((\varepsilon _s,\varepsilon _z)\)-weak NIZK can be turned into fully-secure NIZK, assuming sub-exponentially-secure public-key encryption. Later, however, they have discovered a gap in their proof.
> 
> We revisit the problem of NIZK amplification:
> 
> We amplify NIZK arguments assuming only polynomially-secure public-key encryption, for any constants \(\varepsilon _s+\varepsilon _z < 1\).
> 
> We amplify NIZK proofs assuming only one-way functions, for any constants \(\varepsilon _s+\varepsilon _z < 1\).
> 
> When the soundness error \(\varepsilon _s\) is negligible to begin with, we can also amplify NIZK arguments assuming only one-way functions.
> 
> Our results take a different route than that of Goyal, Jain, and Sahai. They are based on the hidden-bits paradigm, and can be viewed as a reduction from NIZK amplification to the better understood problem of pseudorandomness amplification.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_11](https://doi.org/10.1007/978-3-031-68400-5_11)
## CDS Composition of Multi-round Protocols.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#cds-composition-of-multi-round-protocols)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#cds-composition-of-multi-round-protocols)
### Authors
* Masayuki Abe, NTT Social Informatics Laboratories, Tokyo, Japan
* Mehdi Tibouchi, NTT Social Informatics Laboratories, Tokyo, Japan
* Andrej Bogdanov, School of EECS, University of Ottawa, Ottawa, Canada
* Miyako Ohkubo, Security Fundamentals Laboratory, CSRI, NICT, Tokyo, Japan
* Alon Rosen, Bocconi University and Reichman University, Milan, Italy
* Masayuki Abe, Kyoto University, Kyoto, Japan
* Zehua Shang, Kyoto University, Kyoto, Japan
* Mehdi Tibouchi, Kyoto University, Kyoto, Japan
### Abstract
> We revisit the Cramer, Damgård, Schoenmakers (CDS) approach for composing sigma protocols, and adapt it to a setting in which the underlying protocols have multiple rounds of interaction. The goal of CDS composition is to prove compound NP-relations by combining multiple “atomic” proof systems. Its key feature is that it interacts with the atomic proofs in a generic fashion, enabling simpler and more efficient implementation.
> 
> Recent developments in multi-round protocols call for the adaptation of CDS composition beyond its original scope, which not only was restricted to three-move protocols but in fact fails in the multi-round case, as well as in the composition of so-called k-special sound proofs.
> 
> We propose a new method for multi-round composition in the plain model, in a soundness preserving way and with an “offline” zero-knowledge simulation property. The need for handling arbitrary monotone access structures in \(\textsf{mNC}^1\), which is all Boolean function families represented by polynomial-size formulas over some fixed complete basis, leads us to identify a complexity theoretic problem of independent interest.
> 
> Prior to our work, multi-round composition was either restricted to the random oracle model, or worked only for argument systems, and moreover required heavy “online” zero-knowledge simulation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_12](https://doi.org/10.1007/978-3-031-68400-5_12)
## More Efficient Zero-Knowledge Protocols over $\mathbb {Z}_{2^k}$ via Galois Rings.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#more-efficient-zero-knowledge-protocols-over-mathbb-z-2-k-via-galois-rings)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#more-efficient-zero-knowledge-protocols-over-mathbb-z-2-k-via-galois-rings)
### Authors
* Fuchun Lin, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
* Yizhou Yao, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> A recent line of works on zero-knowledge (ZK) protocols with a vector oblivious linear function evaluation (VOLE)-based offline phase provides a new paradigm for scalable ZK protocols featuring fast proving and small prover memory. Very recently, Baum et al. (Crypto’23) proposed the VOLE-in-the-head technique, allowing such protocols to become publicly verifiable. Many practically efficient protocols for proving circuit satisfiability over any Galois field are implemented, while protocols over rings \(\mathbb {Z}_{2^k}\) are significantly lagging behind, with only a proof-of-concept pioneering work called Appenzeller to Brie (CCS’21) and a first proposal called Moz\(\mathbb {Z}_{2^k}\)arella (Crypto’22). The ring \(\mathbb {Z}_{2^{32}}\) or \(\mathbb {Z}_{2^{64}}\), though highly important (it captures computation in real-life programming and the computer architectures such as CPU words), presents non-trivial difficulties because, for example, unlike Galois fields \(\mathbb {F}_{2^{k}}\), the fraction of units in \(\mathbb {Z}_{2^{k}}\) is 1/2. In this work, we first construct ZK protocols over a high degree Galois ring extension of \(\mathbb {Z}_{2^{k}}\) (fraction of units close to 1) and then convert them to \(\mathbb {Z}_{2^k}\) efficiently using amortization techniques. Our results greatly change the landscape of ZK protocols over \(\mathbb {Z}_{2^k}\).
> 
> (1) We propose a competing ZK protocol that has many advantages over the state-of-the-art Moz\(\mathbb {Z}_{2^k}\)arella. We remove the undesirable dependence of communication complexity on the security parameter, and achieve communication complexity strictly linear in the circuit size. Furthermore, our protocol has better concrete efficiency. For 40, 80 bits soundness on circuits over \(\mathbb {Z}_{2^{32}}\) and \(\mathbb {Z}_{2^{64}}\), we offer \(1.15\times \)–\(2.9\times \) improvements in communication.
> 
> (2) Inspired by the recently proposed interactive message authentication code technique (Weng et al., CCS’22), we construct a constant round ZK protocol over \(\mathbb {Z}_{2^k}\) with sublinear (in the circuit size) communication complexity, which was previously achieved only over fields.
> 
> (3) We show that the pseudorandom correlation generator approach can be adapted to efficiently implement VOLE over Galois rings, with analysis of the hardness of underlying LPN assumptions over Galois rings.
> 
> (4) We adapt the VOLE-in-the-head technique to make it work for \(\mathbb {Z}_{2^k}\), yielding publicly verifiable non-interactive ZK protocols over \(\mathbb {Z}_{2^k}\) which preserve most of the efficiency metrics of the VOLE-based ZK protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_13](https://doi.org/10.1007/978-3-031-68400-5_13)
## Black-Box (and Fast) Non-malleable Zero Knowledge.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-9].md#black-box-and-fast-non-malleable-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#black-box-and-fast-non-malleable-zero-knowledge)
### Authors
* Vincenzo Botta, Sapienza University of Rome, Rome, Italy
* Michele Ciampi, University of Edinburgh, Edinburgh, Scotland, UK
* Emmanuela Orsini, Bocconi University, Milan, Italy
* Luisa Siniscalchi, Technical University of Denmark, Copenhagen, Denmark
* Ivan Visconti, University of Salerno, Fisciano, (SA), Italy
### Abstract
> Non-malleable zero-knowledge (NMZK), originally introduced in the seminal work of Dolev, Dwork, and Naor (STOC 91), is a fundamental concept for modeling the security of proof systems against man-in-the-middle attacks.
> 
> Recently, Kim, Liang, and Pandey (CRYPTO 2022) presented the first efficient constant-round NMZK argument system based solely on symmetric-key cryptography. Their construction relies on a non-black-box use of the involved cryptographic primitives and on multiple executions of Ligero (CCS 2017) that affect both the round complexity and the computational efficiency of their protocol. Their work left open the natural important challenge of achieving NMZK using the underlying primitives only in a black-box fashion (regardless of the number of rounds and actual efficiency).
> 
> In this paper, we solve the aforementioned open problem by presenting the first NMZK argument system based on the black-box use of cryptographic primitives. Our work is optimal in the use of primitives since we only need one-way functions, and asymptotically optimal in the number of rounds since we only require a constant number of rounds. Our argument system is non-malleable with respect to the strong “simulation-extractability” flavor of non-malleability.
> 
> Furthermore, we also show that our construction can be efficiently instantiated in Minicrypt, significantly improving upon the work of Kim et al., both in terms of round complexity and computational efficiency.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_14](https://doi.org/10.1007/978-3-031-68400-5_14)

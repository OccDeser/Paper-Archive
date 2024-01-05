# Crypto 21-4
## Witness Authenticating NIZKs and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#witness-authenticating-nizks-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#witness-authenticating-nizks-and-applications)**
### 作者
* Hanwen Feng, Beihang University, Beijing, China
* Qiang Tang, The University of Sydney, Sydney, Australia
### 摘要
> We initiate the study of witness authenticating NIZK proof systems (waNIZKs), in which one can use a witness w of a statement x to identify whether a valid proof for x is indeed generated using w. Such a new identification functionality enables more diverse applications, and it also puts new requirements on soundness that: (1) no adversary can generate a valid proof that will not be identified by any witness; (2) or forge a proof using her valid witness to frame others. To work around the obvious obstacle towards conventional zero-knowledgeness, we define entropic zero-knowledgeness that requires the proof to leak no partial information, if the witness has sufficient computational entropy.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_1](https://doi.org/10.1007/978-3-030-84259-8_1)
## Towards a Unified Approach to Black-Box Constructions of Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#towards-a-unified-approach-to-black-box-constructions-of-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#towards-a-unified-approach-to-black-box-constructions-of-zero-knowledge-proofs)**
### 作者
* Xiao Liang, Stony Brook University, Stony Brook, NY, 11790, USA
* Omkant Pandey, Stony Brook University, Stony Brook, NY, 11790, USA
### 摘要
> General-purpose zero-knowledge proofs for all \(\mathsf {NP} \) languages greatly simplify secure protocol design. However, they inherently require the code of the underlying relation. If the relation contains black-box calls to a cryptographic function, the code of that function must be known to use the ZK proof, even if both the relation and the proof require only black-box access to the function. Rosulek (Crypto’12) shows that non-trivial proofs for even simple statements, such as membership in the range of a one-way function, require non-black-box access.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_2](https://doi.org/10.1007/978-3-030-84259-8_2)
## Compressing Proofs of k-Out-Of-n Partial Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#compressing-proofs-of-k-out-of-n-partial-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#compressing-proofs-of-k-out-of-n-partial-knowledge)**
### 作者
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ronald Cramer, CWI, Cryptology Group, Amsterdam, The Netherlands
* Serge Fehr, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Ronald Cramer, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Serge Fehr, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Thomas Attema, TNO, Cyber Security and Robustness, The Hague, The Netherlands
### 摘要
> In a proof of partial knowledge, introduced by Cramer, Damgård and Schoenmakers (CRYPTO 1994), a prover knowing witnesses for some k-subset of n given public statements can convince the verifier of this claim without revealing which k-subset. Their solution combines \(\varSigma \)-protocol theory and linear secret sharing, and achieves linear communication complexity for general k, n. Especially the “one-out-of-n” case \(k=1\) has seen myriad applications during the last decades, e.g., in electronic voting, ring signatures, and confidential transaction systems.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_3](https://doi.org/10.1007/978-3-030-84259-8_3)
## Mac'n'Cheese: Zero-Knowledge Proofs for Boolean and Arithmetic Circuits with Nested Disjunctions.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#macncheese-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits-with-nested-disjunctions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#macncheese-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits-with-nested-disjunctions)**
### 作者
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Alex J. Malozemoff, Galois, Inc., Portland, USA
* Marc B. Rosen, Galois, Inc., Portland, USA
### 摘要
> Zero knowledge proofs are an important building block in many cryptographic applications. Unfortunately, when the proof statements become very large, existing zero-knowledge proof systems easily reach their limits: either the computational overhead, the memory footprint, or the required bandwidth exceed levels that would be tolerable in practice.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_4](https://doi.org/10.1007/978-3-030-84259-8_4)
## Time- and Space-Efficient Arguments from Groups of Unknown Order.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#time-and-space-efficient-arguments-from-groups-of-unknown-order) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#time-and-space-efficient-arguments-from-groups-of-unknown-order)**
### 作者
* Alexander R. Block, Purdue University, West Lafayette, USA
* Justin Holmgren, NTT Research, Sunnyvale, CA, USA
* Alon Rosen, IDC Herzliya, Herzliya, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
* Pratik Soni, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> We construct public-coin time- and space-efficient zero-knowledge arguments for \(\mathbf {NP} \). For every time T and space S non-deterministic RAM computation, the prover runs in time \(T \cdot {{\,\mathrm{polylog}\,}}(T)\) and space \(S \cdot {{\,\mathrm{polylog}\,}}(T)\), and the verifier runs in time \(n \cdot {{\,\mathrm{polylog}\,}}(T)\), where n is the input length. Our protocol relies on hidden order groups, which can be instantiated with a trusted setup from the hardness of factoring (products of safe primes), or without a trusted setup using class groups. The argument-system can heuristically be made non-interactive using the Fiat-Shamir transform.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_5](https://doi.org/10.1007/978-3-030-84259-8_5)
## Broadcast Encryption with Size N1/3 and More from k-Lin.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#broadcast-encryption-with-size-n1-3-and-more-from-k-lin) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#broadcast-encryption-with-size-n1-3-and-more-from-k-lin)**
### 作者
* Hoeteck Wee, NTT Research, California, USA
* Hoeteck Wee, ENS, Paris, France
### 摘要
> We present the first pairing-based ciphertext-policy attribute-based encryption (CP-ABE) scheme for the class of degree 3 polynomials with compact parameters: the public key, ciphertext and secret keys comprise O(n) group elements, where n is input length for the function. As an immediate corollary, we obtain a pairing-based broadcast encryption scheme for N users with \(O(N^{1/3})\)-sized parameters, breaking the long-standing \(\sqrt{N}\) barrier for pairing-based broadcast encryption. All of our constructions achieve adaptive security against unbounded collusions, and rely on the (bilateral) k-Lin assumption in prime-order bilinear groups.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_6](https://doi.org/10.1007/978-3-030-84259-8_6)
## Fine-Grained Secure Attribute-Based Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#fine-grained-secure-attribute-based-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#fine-grained-secure-attribute-based-encryption)**
### 作者
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Yu Chen, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Yu Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yu Chen, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, 266237, China
### 摘要
> Fine-grained cryptography is constructing cryptosystems in a setting where an adversary’s resource is a-prior bounded and an honest party has less resource than an adversary. Currently, only simple form of encryption schemes, such as secret-key and public-key encryption, are constructed in this setting.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_7](https://doi.org/10.1007/978-3-030-84259-8_7)
## Multi-input Quadratic Functional Encryption from Pairings.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#multi-input-quadratic-functional-encryption-from-pairings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#multi-input-quadratic-functional-encryption-from-pairings)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Rishab Goyal, MIT, Cambridge, USA
* Junichi Tomida, NTT Corporation, Tokyo, Japan
### 摘要
> We construct the first multi-input functional encryption (MIFE) scheme for quadratic functions from pairings. Our construction supports polynomial number of users, where user i, for \(i \in [n]\), encrypts input \(\mathbf{x}_i \in \mathbb {Z}^m\) to obtain ciphertext \(\mathsf {CT}_i\), the key generator provides a key \(\mathsf {SK}_\mathbf{c}\) for vector \(\mathbf{c} \in \mathbb {Z}^{({mn})^2}\) and decryption, given \(\mathsf {CT}_1,\ldots ,\mathsf {CT}_n\) and \(\mathsf {SK}_\mathbf{c}\), recovers \(\langle \mathbf{c}, \mathbf{x} \otimes \mathbf{x} \rangle \) and nothing else. We achieve indistinguishability-based (selective) security against unbounded collusions under the standard bilateral matrix Diffie-Hellman assumption. All previous MIFE schemes either support only inner products (linear functions) or rely on strong cryptographic assumptions such as indistinguishability obfuscation or multi-linear maps.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_8](https://doi.org/10.1007/978-3-030-84259-8_8)
## Functional Encryption for Turing Machines with Dynamic Bounded Collusion from LWE.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#functional-encryption-for-turing-machines-with-dynamic-bounded-collusion-from-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#functional-encryption-for-turing-machines-with-dynamic-bounded-collusion-from-lwe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Narasimha Sai Vempati, IIT Madras, Chennai, India
* Monosij Maitra, TU Darmstadt, Darmstadt, Germany
* Shota Yamada, AIST Japan, Tsukuba, Japan
### 摘要
> The classic work of Gorbunov, Vaikuntanathan and Wee (CRYPTO 2012) and follow-ups provided constructions of bounded collusion Functional Encryption (FE) for circuits from mild assumptions. In this work, we improve the state of affairs for bounded collusion FE in several ways:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_9](https://doi.org/10.1007/978-3-030-84259-8_9)
## Receiver-Anonymity in Rerandomizable RCCA-Secure Cryptosystems Resolved.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#receiver-anonymity-in-rerandomizable-rcca-secure-cryptosystems-resolved) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#receiver-anonymity-in-rerandomizable-rcca-secure-cryptosystems-resolved)**
### 作者
* Yi Wang, School of Computer, National University of Defense Technology, Changsha, China
* Rongmao Chen, School of Computer, National University of Defense Technology, Changsha, China
* Baosheng Wang, School of Computer, National University of Defense Technology, Changsha, China
* Guomin Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
* Xinyi Huang, Fujian Provincial Key Laboratory of Network Security and Cryptology, College of Mathematics and Informatics, Fujian Normal University, Fuzhou, China
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York, USA
### 摘要
> In this work we resolve the open problem raised by Prabhakaran and Rosulek at CRYPTO 2007, and present the first anonymous, rerandomizable, Replayable-CCA (RCCA) secure public-key encryption scheme. This solution opens the door to numerous privacy-oriented applications with a highly desired RCCA security level. At the core of our construction is a non-trivial extension of smooth projective hash functions (Cramer and Shoup, EUROCRYPT 2002), and a modular generic framework developed for constructing rerandomizable RCCA-secure encryption schemes with receiver-anonymity. The framework gives an enhanced abstraction of the original Prabhakaran and Rosulek’s scheme (which was the first construction of rerandomizable RCCA-secure encryption in the standard model), where the most crucial enhancement is the first realization of the desirable property of receiver-anonymity, essential to privacy settings. It also serves as a conceptually more intuitive and generic understanding of RCCA security, which leads, for example, to new implementations of the notion. Finally, note that (since CCA security is not applicable to the privacy applications motivating our work) the concrete results and the conceptual advancement presented here, seem to substantially expand the power and relevance of the notion of rerandomizable RCCA-secure encryption.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_10](https://doi.org/10.1007/978-3-030-84259-8_10)
## White Box Traitor Tracing.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#white-box-traitor-tracing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#white-box-traitor-tracing)**
### 作者
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### 摘要
> Traitor tracing aims to identify the source of leaked decryption keys. Since the “traitor” can try to hide their key within obfuscated code in order to evade tracing, the tracing algorithm should work for general, potentially obfuscated, decoder programs. In the setting of such general decoder programs, prior work uses black box tracing: the tracing algorithm ignores the implementation of the decoder, and instead traces just by making queries to the decoder and observing the outputs.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_11](https://doi.org/10.1007/978-3-030-84259-8_11)
## Does Fiat-Shamir Require a Cryptographic Hash Function?
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#does-fiat-shamir-require-a-cryptographic-hash-function) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#does-fiat-shamir-require-a-cryptographic-hash-function)**
### 作者
* Yilei Chen, Tsinghua University, Beijing, China
* Alex Lombardi, MIT, Cambridge, USA
* Fermi Ma, Princeton University, Princeton, USA
* Fermi Ma, NTT Research, Sunnyvale, USA
* Willy Quach, Northeastern University, Boston, USA
### 摘要
> The Fiat-Shamir transform is a general method for reducing interaction in public-coin protocols by replacing the random verifier messages with deterministic hashes of the protocol transcript. The soundness of this transformation is usually heuristic and lacks a formal security proof. Instead, to argue security, one can rely on the random oracle methodology, which informally states that whenever a random oracle soundly instantiates Fiat-Shamir, a hash function that is “sufficiently unstructured” (such as fixed-length SHA-2) should suffice. Finally, for some special interactive protocols, it is known how to (1) isolate a concrete security property of a hash function that suffices to instantiate Fiat-Shamir and (2) build a hash function satisfying this property under a cryptographic assumption such as Learning with Errors.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_12](https://doi.org/10.1007/978-3-030-84259-8_12)
## Composition with Knowledge Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#composition-with-knowledge-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#composition-with-knowledge-assumptions)**
### 作者
* Thomas Kerber, The University of Edinburgh and IOHK, Edinburgh, Scotland
* Aggelos Kiayias, The University of Edinburgh and IOHK, Edinburgh, Scotland
* Markulf Kohlweiss, The University of Edinburgh and IOHK, Edinburgh, Scotland
### 摘要
> Zero-knowledge succinct non-interactive arguments (zk-SNARKs) rely on knowledge assumptions for their security. Meanwhile, as the complexity and scale of cryptographic systems continues to grow, the composition of secure protocols is of vital importance. The current gold standards of composable security, the Universal Composability and Constructive Cryptography frameworks cannot capture knowledge assumptions, as their core proofs of composition prohibit white-box extraction. In this paper, we present a formal model allowing the composition of knowledge assumptions. Despite showing impossibility for the general case, we demonstrate the model’s usefulness when limiting knowledge assumptions to few instances of protocols at a time. We finish by providing the first instance of a simultaneously succinct and composable zk-SNARK, by using existing results within our framework.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_13](https://doi.org/10.1007/978-3-030-84259-8_13)
## Non-interactive Batch Arguments for NP from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#non-interactive-batch-arguments-for-np-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#non-interactive-batch-arguments-for-np-from-standard-assumptions)**
### 作者
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, USA
### 摘要
> We study the problem of designing non-interactive batch arguments for \(\mathsf {NP}\). Such an argument system allows an efficient prover to prove multiple \(\mathsf {NP}\) statements, with size smaller than the combined witness length.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_14](https://doi.org/10.1007/978-3-030-84259-8_14)
## Targeted Lossy Functions and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#targeted-lossy-functions-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#targeted-lossy-functions-and-applications)**
### 作者
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Brent Waters, UT Austin, Austin, USA
* Brent Waters, NTT Research, Sunnyvale, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### 摘要
> Lossy trapdoor functions, introduced by Peikert and Waters (STOC ’08), can be initialized in one of two indistinguishable modes: in injective mode, the function preserves all information about its input, and can be efficiently inverted given a trapdoor, while in lossy mode, the function loses some information about its input. Such functions have found countless applications in cryptography, and can be constructed from a variety of Cryptomania assumptions. In this work, we introduce targeted lossy functions (TLFs), which relax lossy trapdoor functions along two orthogonal dimensions. Firstly, they do not require an inversion trapdoor in injective mode. Secondly, the lossy mode of the function is initialized with some target input, and the function is only required to lose information about this particular target. The injective and lossy modes should be indistinguishable even given the target. We construct TLFs from Minicrypt assumptions, namely, injective pseudorandom generators, or even one-way functions under a natural relaxation of injectivity. We then generalize TLFs to incorporate branches, and construct all-injective-but-one and all-lossy-but-one variants. We show a wide variety of applications of targeted lossy functions. In several cases, we get the first Minicrypt constructions of primitives that were previously only known under Cryptomania assumptions. Our applications include:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_15](https://doi.org/10.1007/978-3-030-84259-8_15)
## The t-wise Independence of Substitution-Permutation Networks.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#the-t-wise-independence-of-substitution-permutation-networks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#the-t-wise-independence-of-substitution-permutation-networks)**
### 作者
* Tianren Liu, University of Washington, Seattle, WA, USA
* Stefano Tessaro, University of Washington, Seattle, WA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### 摘要
> Block ciphers such as the Advanced Encryption Standard (Rijndael) are used extensively in practice, yet our understanding of their security continues to be highly incomplete. This paper promotes and continues a research program aimed at proving the security of block ciphers against important and well-studied classes of attacks. In particular, we initiate the study of (almost) t-wise independence of concrete block-cipher construction paradigms such as substitution-permutation networks and key-alternating ciphers. Sufficiently strong (almost) pairwise independence already suffices to resist (truncated) differential attacks and linear cryptanalysis, and hence this is a relevant and meaningful target. Our results are two-fold.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_16](https://doi.org/10.1007/978-3-030-84259-8_16)
## Low-Complexity Weak Pseudorandom Functions in $\mathtt {AC}0[\mathtt {MOD}2]$.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#low-complexity-weak-pseudorandom-functions-in-mathtt-ac-0-mathtt-mod-2) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#low-complexity-weak-pseudorandom-functions-in-mathtt-ac-0-mathtt-mod-2)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> A weak pseudorandom function (WPRF) is a keyed function \(f_k:\{0,1\}^n\rightarrow \{0,1\}\) such that, for a random key k, a collection of samples \((x, f_k(x))\), for uniformly random inputs x, cannot be efficiently distinguished from totally random input-output pairs (x, y). We study WPRFs in \(\mathtt {AC}0[\mathtt {MOD}2] \), the class of functions computable by \(\mathtt {AC}0 \) circuits with parity gates, making the following contributions.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_17](https://doi.org/10.1007/978-3-030-84259-8_17)
## MPC-Friendly Symmetric Cryptography from Alternating Moduli: Candidates, Protocols, and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#mpc-friendly-symmetric-cryptography-from-alternating-moduli-candidates-protocols-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#mpc-friendly-symmetric-cryptography-from-alternating-moduli-candidates-protocols-and-applications)**
### 作者
* Itai Dinur, Ben-Gurion University, Beersheba, Israel
* Steven Goldfeder, Cornell Tech, New York, USA
* Mahimna Kelkar, Cornell Tech, New York, USA
* Tzipora Halevi, Brooklyn College, CUNY, New York, USA
* Yuval Ishai, Technion, Haifa, Israel
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Vivek Sharma, Graduate Center, CUNY, New York, USA
* Greg Zaverucha, Microsoft Research, Redmond, USA
### 摘要
> We study new candidates for symmetric cryptographic primitives that leverage alternation between linear functions over \(\mathbb {Z}_2\) and \(\mathbb {Z}_3\) to support fast protocols for secure multiparty computation (MPC). This continues the study of weak pseudorandom functions of this kind initiated by Boneh et al. (TCC 2018) and Cheon et al. (PKC 2021).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_18](https://doi.org/10.1007/978-3-030-84259-8_18)
## No Time to Hash: On Super-Efficient Entropy Accumulation.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#no-time-to-hash-on-super-efficient-entropy-accumulation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#no-time-to-hash-on-super-efficient-entropy-accumulation)**
### 作者
* Yevgeniy Dodis, New York University, New York, NY, USA
* Siyao Guo, New York University Shanghai, Shanghai, China
* Zhiye Xie, New York University Shanghai, Shanghai, China
* Noah Stephens-Davidowitz, Cornell University, Ithaca, NY, USA
### 摘要
> Real-world random number generators (RNGs) cannot afford to use (slow) cryptographic hashing every time they refresh their state R with a new entropic input X. Instead, they use “superefficient” simple entropy-accumulation procedures, such as

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_19](https://doi.org/10.1007/978-3-030-84259-8_19)
## A Logarithmic Lower Bound for Oblivious RAM (for All Parameters).
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#a-logarithmic-lower-bound-for-oblivious-ram-for-all-parameters) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#a-logarithmic-lower-bound-for-oblivious-ram-for-all-parameters)**
### 作者
* Ilan Komargodski, Hebrew University, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, CA, USA
* Wei-Kai Lin, Cornell University, Ithaca, USA
### 摘要
> An Oblivious RAM (ORAM), introduced by Goldreich and Ostrovsky (J. ACM 1996), is a (probabilistic) RAM that hides its access pattern, i.e., for every input the observed locations accessed are similarly distributed. In recent years there has been great progress both in terms of upper bounds as well as in terms of lower bounds, essentially pinning down the smallest overhead possible in various settings of parameters.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_20](https://doi.org/10.1007/978-3-030-84259-8_20)
## Oblivious RAM with Worst-Case Logarithmic Overhead.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#oblivious-ram-with-worst-case-logarithmic-overhead) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#oblivious-ram-with-worst-case-logarithmic-overhead)**
### 作者
* Gilad Asharov, Bar-Ilan University, Ramat Gan, Israel
* Ilan Komargodski, Hebrew University of Jerusalem, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, CA, USA
* Wei-Kai Lin, Cornell University, New York, USA
* Elaine Shi, CMU, Pittsburgh, USA
### 摘要
> We present the first Oblivious RAM (ORAM) construction that for N memory blocks supports accesses with worst-case \(O(\log N)\) overhead for any block size \(\varOmega (\log N)\) while requiring a client memory of only a constant number of memory blocks. We rely on the existence of one-way functions and guarantee computational security. Our result closes a long line of research on fundamental feasibility results for ORAM constructions as logarithmic overhead is necessary.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_21](https://doi.org/10.1007/978-3-030-84259-8_21)
## Puncturable Pseudorandom Sets and Private Information Retrieval with Near-Optimal Online Bandwidth and Time.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#puncturable-pseudorandom-sets-and-private-information-retrieval-with-near-optimal-online-bandwidth-and-time) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#puncturable-pseudorandom-sets-and-private-information-retrieval-with-near-optimal-online-bandwidth-and-time)**
### 作者
* Elaine Shi, CMU, Pittsburgh, USA
* Waqar Aqeel, Duke, Durham, USA
* Bruce Maggs, Duke, Durham, USA
* Balakrishnan Chandrasekaran, Vrije Universiteit Amsterdam, Amsterdam, The Netherlands
### 摘要
> Imagine one or more non-colluding servers each holding a large public database, e.g., the repository of DNS entries. Clients would like to access entries in this database without disclosing their queries to the servers. Classical private information retrieval (PIR) schemes achieve polylogarithmic bandwidth per query, but require the server to perform linear computation per query, which is a significant barrier towards deployment.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_22](https://doi.org/10.1007/978-3-030-84259-8_22)
## Authenticated Key Exchange and Signatures with Tight Security in the Standard Model.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#authenticated-key-exchange-and-signatures-with-tight-security-in-the-standard-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#authenticated-key-exchange-and-signatures-with-tight-security-in-the-standard-model)**
### 作者
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
* Sven Schäge, Ruhr-Universität Bochum, Bochum, Germany
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> We construct the first authenticated key exchange protocols that achieve tight security in the standard model. Previous works either relied on techniques that seem to inherently require a random oracle, or achieved only “Multi-Bit-Guess” security, which is not known to compose tightly, for instance, to build a secure channel.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_23](https://doi.org/10.1007/978-3-030-84259-8_23)
## KHAPE: Asymmetric PAKE from Key-Hiding Key Exchange.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-4.md#khape-asymmetric-pake-from-key-hiding-key-exchange) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-4.md#khape-asymmetric-pake-from-key-hiding-key-exchange)**
### 作者
* Yanqi Gu, University of California, Irvine, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, Irvine, USA
* Hugo Krawczyk, Algorand Foundation, New York, USA
### 摘要
> OPAQUE [Jarecki et al., Eurocrypt 2018] is an asymmetric password authenticated key exchange (aPAKE) protocol that is being developed as an Internet standard and for use within TLS 1.3. OPAQUE combines an Oblivious PRF (OPRF) with an authenticated key exchange to provide strong security properties, including security against pre-computation attacks (called saPAKE security). However, the security of OPAQUE relies crucially on the security of the OPRF. If the latter breaks (by cryptanalysis, quantum attacks or security compromise), the user’s password is exposed to an offline dictionary attack. To address this weakness, we present KHAPE, a variant of OPAQUE that does not require the use of an OPRF to achieve aPAKE security, resulting in improved resilience and near-optimal computational performance. An OPRF can be optionally added to KHAPE, for enhanced saPAKE security, but without opening the password to an offline dictionary attack upon OPRF compromise.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_24](https://doi.org/10.1007/978-3-030-84259-8_24)

# Eurocrypt[2019-1]
## Compact Adaptively Secure ABE for \mathsf NC^1 from k-Lin.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#compact-adaptively-secure-abe-for-mathsf-nc-1-from-k-lin)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#compact-adaptively-secure-abe-for-mathsf-nc-1-from-k-lin)
### Authors
* Lucas Kowalczyk, Columbia University, New York, USA
* Hoeteck Wee, CNRS, ENS, PSL, Paris, France
### Abstract
> We present compact attribute-based encryption (ABE) schemes for \(\mathsf {NC^1}\) that are adaptively secure under the k-Lin assumption with polynomial security loss. Our KP-ABE scheme achieves ciphertext size that is linear in the attribute length and independent of the policy size even in the many-use setting, and we achieve an analogous efficiency guarantee for CP-ABE. This resolves the central open problem posed by Lewko and Waters (CRYPTO 2011). Previous adaptively secure constructions either impose an attribute “one-use restriction” (or the ciphertext size grows with the policy size), or require q-type assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_1](https://doi.org/10.1007/978-3-030-17653-2_1)
## Unbounded Dynamic Predicate Compositions in Attribute-Based Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#unbounded-dynamic-predicate-compositions-in-attribute-based-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#unbounded-dynamic-predicate-compositions-in-attribute-based-encryption)
### Authors
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### Abstract
> We present several transformations that combine a set of attribute-based encryption (ABE) schemes for simpler predicates into a new ABE scheme for more expressive composed predicates. Previous proposals for predicate compositions of this kind, the most recent one being that of Ambrona et al. at Crypto’17, can be considered static (or partially dynamic), meaning that the policy (or its structure) that specifies a composition must be fixed at the setup. Contrastingly, our transformations are dynamic and unbounded: they allow a user to specify an arbitrary and unbounded-size composition policy right into his/her own key or ciphertext. We propose transformations for three classes of composition policies, namely, the classes of any monotone span programs, any branching programs, and any deterministic finite automata. These generalized policies are defined over arbitrary predicates, hence admitting modular compositions. One application from modularity is a new kind of ABE for which policies can be “nested” over ciphertext and key policies. As another application, we achieve the first fully secure completely unbounded key-policy ABE for non-monotone span programs, in a modular and clean manner, under the q-ratio assumption. Our transformations work inside a generic framework for ABE called symbolic pair encoding, proposed by Agrawal and Chase at Eurocrypt’17. At the core of our transformations, we observe and exploit an unbounded nature of the symbolic property so as to achieve unbounded-size policy compositions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_2](https://doi.org/10.1007/978-3-030-17653-2_2)
## (R)CCA Secure Updatable Encryption with Integrity Protection.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#r-cca-secure-updatable-encryption-with-integrity-protection)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#r-cca-secure-updatable-encryption-with-integrity-protection)
### Authors
* Michael Klooß, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Andy Rupp, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Anja Lehmann, IBM Research – Zurich, Rüschlikon, Switzerland
### Abstract
> An updatable encryption scheme allows a data host to update ciphertexts of a client from an old to a new key, given so-called update tokens from the client. Rotation of the encryption key is a common requirement in practice in order to mitigate the impact of key compromises over time. There are two incarnations of updatable encryption: One is ciphertext-dependent, i.e. the data owner has to (partially) download all of his data and derive a dedicated token per ciphertext. Everspaugh et al. (CRYPTO’17) proposed CCA and CTXT secure schemes in this setting. The other, more convenient variant is ciphertext-independent, i.e., it allows a single token to update all ciphertexts. However, so far, the broader functionality of tokens in this setting comes at the price of considerably weaker security: the existing schemes by Boneh et al. (CRYPTO’13) and Lehmann and Tackmann (EUROCRYPT’18) only achieve CPA security and provide no integrity protection. Arguably, when targeting the scenario of outsourcing data to an untrusted host, plaintext integrity should be a minimal security requirement. Otherwise, the data host may alter or inject ciphertexts arbitrarily. Indeed, the schemes from BLMR13 and LT18 suffer from this weakness, and even EPRS17 only provides integrity against adversaries which cannot arbitrarily inject ciphertexts. In this work, we provide the first ciphertext-independent updatable encryption schemes with security beyond CPA, in particular providing strong integrity protection. Our constructions and security proofs of updatable encryption schemes are surprisingly modular. We give a generic transformation that allows key-rotation and confidentiality/integrity of the scheme to be treated almost separately, i.e., security of the updatable scheme is derived from simple properties of its static building blocks. An interesting side effect of our generic approach is that it immediately implies the unlinkability of ciphertext updates that was introduced as an essential additional property of updatable encryption by EPRS17 and LT18.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_3](https://doi.org/10.1007/978-3-030-17653-2_3)
## Aurora: Transparent Succinct Arguments for R1CS.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#aurora-transparent-succinct-arguments-for-r1cs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#aurora-transparent-succinct-arguments-for-r1cs)
### Authors
* Eli Ben-Sasson, Technion/STARKWare, Haifa, Israel
* Michael Riabzev, Technion/STARKWare, Haifa, Israel
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Nicholas Spooner, UC Berkeley, Berkeley, USA
* Nicholas P. Ward, UC Berkeley, Berkeley, USA
* Madars Virza, MIT Media Lab, Cambridge, USA
### Abstract
> We design, implement, and evaluate a zero knowledge succinct non-interactive argument (SNARG) for Rank-1 Constraint Satisfaction (R1CS), a widely-deployed NP language undergoing standardization. Our SNARG has a transparent setup, is plausibly post-quantum secure, and uses lightweight cryptography. A proof attesting to the satisfiability of n constraints has size \(O(\log ^2 n)\); it can be produced with \(O(n \log n)\) field operations and verified with O(n). At 128 bits of security, proofs are less than \({250}\,\mathrm{kB}\) even for several million constraints, more than \(10{\times }\) shorter than prior SNARGs with similar features.
> 
> A key ingredient of our construction is a new Interactive Oracle Proof (IOP) for solving a univariate analogue of the classical sumcheck problem [LFKN92], originally studied for multivariate polynomials. Our protocol verifies the sum of entries of a Reed–Solomon codeword over any subgroup of a field.
> 
> We also provide \(\texttt {libiop}\), a library for writing IOP-based arguments, in which a toolchain of transformations enables programmers to write new arguments by writing simple IOP sub-components. We have used this library to specify our construction and prior ones, and plan to open-source it.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_4](https://doi.org/10.1007/978-3-030-17653-2_4)
## The Double Ratchet: Security Notions, Proofs, and Modularization for the Signal Protocol.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#the-double-ratchet-security-notions-proofs-and-modularization-for-the-signal-protocol)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#the-double-ratchet-security-notions-proofs-and-modularization-for-the-signal-protocol)
### Authors
* Sandro Coretti, New York University, New York, USA
* Yevgeniy Dodis, New York University, New York, USA
* Joël Alwen, Wickr Inc., San Francisco, USA
### Abstract
> Signal is a famous secure messaging protocol used by billions of people, by virtue of many secure text messaging applications including Signal itself, WhatsApp, Facebook Messenger, Skype, and Google Allo. At its core it uses the concept of “double ratcheting,” where every message is encrypted and authenticated using a fresh symmetric key; it has many attractive properties, such as forward security, post-compromise security, and “immediate (no-delay) decryption,” which had never been achieved in combination by prior messaging protocols.
> 
> While the formal analysis of the Signal protocol, and ratcheting in general, has attracted a lot of recent attention, we argue that none of the existing analyses is fully satisfactory. To address this problem, we give a clean and general definition of secure messaging, which clearly indicates the types of security we expect, including forward security, post-compromise security, and immediate decryption. We are the first to explicitly formalize and model the immediate decryption property, which implies (among other things) that parties seamlessly recover if a given message is permanently lost—a property not achieved by any of the recent “provable alternatives to Signal.”
> 
> We build a modular “generalized Signal protocol” from the following components: (a) continuous key agreement (CKA), a clean primitive we introduce and which can be easily and generically built from public-key encryption (not just Diffie-Hellman as is done in the current Signal protocol) and roughly models “public-key ratchets;” (b) forward-secure authenticated encryption with associated data (FS-AEAD), which roughly captures “symmetric-key ratchets;” and (c) a two-input hash function that is a pseudorandom function (resp. generator with input) in its first (resp. second) input, which we term PRF-PRNG. As a result, in addition to instantiating our framework in a way resulting in the existing, widely-used Diffie-Hellman based Signal protocol, we can easily get post-quantum security and not rely on random oracles in the analysis.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_5](https://doi.org/10.1007/978-3-030-17653-2_5)
## Efficient Ratcheting: Almost-Optimal Guarantees for Secure Messaging.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#efficient-ratcheting-almost-optimal-guarantees-for-secure-messaging)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#efficient-ratcheting-almost-optimal-guarantees-for-secure-messaging)
### Authors
* Daniel Jost, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Marta Mularczyk, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
### Abstract
> In the era of mass surveillance and information breaches, privacy of Internet communication, and messaging in particular, is a growing concern. As secure messaging protocols are executed on the not-so-secure end-user devices, and because their sessions are long-lived, they aim to guarantee strong security even if secret states and local randomness can be exposed.
> 
> The most basic security properties, including forward secrecy, can be achieved using standard techniques such as authenticated encryption. Modern protocols, such as Signal, go one step further and additionally provide the so-called backward secrecy, or healing from state exposures. These additional guarantees come at the price of a moderate efficiency loss (they require public-key primitives).
> 
> On the opposite side of the security spectrum are the works by Jaeger and Stepanovs and by Poettering and Rösler, which characterize the optimal security a secure-messaging scheme can achieve. However, their proof-of-concept constructions suffer from an extreme efficiency loss compared to Signal. Moreover, this caveat seems inherent.
> 
> This paper explores the area in between: our starting point are the basic, efficient constructions, and then we ask how far we can go towards the optimal security without losing too much efficiency. We present a construction with guarantees much stronger than those achieved by Signal, and slightly weaker than optimal, yet its efficiency is closer to that of Signal (only standard public-key cryptography is used).
> 
> On a technical level, achieving optimal guarantees inherently requires key-updating public-key primitives, where the update information is allowed to be public. We consider secret update information instead. Since a state exposure temporally breaks confidentiality, we carefully design such secretly-updatable primitives whose security degrades gracefully if the supposedly secret update information leaks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_6](https://doi.org/10.1007/978-3-030-17653-2_6)
## Indistinguishability Obfuscation Without Multilinear Maps: New Methods for Bootstrapping and Instantiation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#indistinguishability-obfuscation-without-multilinear-maps-new-methods-for-bootstrapping-and-instantiation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#indistinguishability-obfuscation-without-multilinear-maps-new-methods-for-bootstrapping-and-instantiation)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
### Abstract
> Constructing indistinguishability obfuscation (\(\mathsf{iO}\)) [17] is a central open question in cryptography. We provide new methods to make progress towards this goal. Our contributions may be summarized as follows:
> 
> 1. Bootstrapping. In a recent work, Lin and Tessaro [71] (LT) show that \(\mathsf{iO}\) may be constructed using (i) Functional Encryption (\(\mathsf {FE}\)) for polynomials of degree L, (ii) Pseudorandom Generators (\(\mathsf{PRG}\)) with blockwise locality L and polynomial expansion, and (iii) Learning With Errors (\(\mathsf{LWE}\)). Since there exist constructions of \(\mathsf {FE}\) for quadratic polynomials from standard assumptions on bilinear maps [16, 68], the ideal scenario would be to set \(L=2\), yielding \(\mathsf{iO}\) from widely believed assumptions
> 
> Unfortunately, it was shown soon after [18, 73] that \(\mathsf{PRG}\) with block locality 2 and the expansion factor required by the LT construction, concretely \(\varOmega (n \cdot 2^{b(3+\epsilon )})\), where n is the input length and b is the block length, do not exist. In the worst case, these lower bounds rule out 2-block local \(\mathsf{PRG}\) with stretch \(\varOmega (n \cdot 2^{b(2+\epsilon )})\). While [18, 73] provided strong negative evidence for constructing \(\mathsf{iO}\) based on bilinear maps, they could not rule out the possibility completely; a tantalizing gap has remained. Given the current state of lower bounds, the existence of 2 block local \(\mathsf{PRG}\) with expansion factor \(\varOmega (n \cdot 2^{b(1+\epsilon )})\) remains open, although this stretch does not suffice for the LT bootstrapping, and is hence unclear to be relevant for \(\mathsf{iO}\).
> 
> In this work, we improve the state of affairs as follows.
> 
> (a) Weakening requirements on Boolean PRGs: In this work, we show that the narrow window of expansion factors left open by lower bounds do suffice for \(\mathsf{iO}\). We show a new method to construct \(\mathsf {FE}\) for \(\mathsf {NC}_1\) from (i) \(\mathsf {FE}\) for degree L polynomials, (ii) \(\mathsf{PRG}\)s of block locality L and expansion factor \(\tilde{\varOmega }(n \cdot 2^{b(1+\epsilon )})\), and (iii) \(\mathsf{LWE}\) (or \(\mathsf{RLWE}\)).
> 
> (b) Broadening class of sufficient randomness generators: Our bootstrapping theorem may be instantiated with a broader class of pseudorandom generators than hitherto considered for \(\mathsf{iO}\), and may circumvent lower bounds known for the arithmetic degree of \(\mathsf{iO}\)-sufficient \(\mathsf{PRG}\)s [18, 73]; in particular, these may admit instantiations with arithmetic degree 2, yielding \(\mathsf{iO}\) with the additional assumptions of \(\mathsf{SXDH}\) on Bilinear maps and \(\mathsf{LWE}\). In more detail, we may use the following two classes of \(\mathsf{PRG}\):
> 
> i. Non-Boolean PRGs: We may use pseudorandom generators whose inputs and outputs need not be Boolean but may be integers restricted to a small (polynomial) range. Additionally, the outputs are not required to be pseudorandom but must only satisfy a milder indistinguishability property (We note that our notion of non Boolean PRGs is qualitatively similar to the notion of \(\varDelta \) RGs defined in the concurrent work of Ananth, Jain and Sahai [9]. We emphasize that the methods of [9] and the present work are very different, but both works independently discover the same notion of weak PRG as sufficient for building \(\mathsf{iO}\).).
> 
> ii. Correlated Noise Generators: We introduce an even weaker class of pseudorandom generators, which we call correlated noise generators (\(\mathsf{CNG}\)) which may not only be non-Boolean but are required to satisfy an even milder (seeming) indistinguishability property than \(\varDelta \) RG.
> 
> (c) Assumptions and Efficiency. Our bootstrapping theorems can be based on the hardness of the Learning With Errors problem or its ring variant (\(\mathsf{LWE}/ \mathsf{RLWE}\)) and can compile \(\mathsf {FE}\) for degree L polynomials directly to \(\mathsf {FE}\) for \(\mathsf {NC}_1\). Previous work compiles \(\mathsf {FE}\) for degree L polynomials to \(\mathsf {FE}\) for \(\mathsf {NC}_0\) to \(\mathsf {FE}\) for \(\mathsf {NC}_1\) to \(\mathsf{iO}\) [12, 45, 68, 72].
> 
> Our method for bootstrapping to \(\mathsf {NC}_1\) does not go via randomized encodings as in previous works, which makes it simpler and more efficient than in previous works.
> 
> 2. Instantiating Primitives. In this work, we provide the first direct candidate of \(\mathsf {FE}\) for constant degree polynomials from new assumptions on lattices. Our construction is new and does not go via multilinear maps or graded encoding schemes as all previous constructions. Together with the bootstrapping step above, this yields a completely new candidate for \(\mathsf{iO}\) (as well as \(\mathsf {FE}\) for \(\mathsf {NC}_1\)), which makes no use of multilinear or even bilinear maps. Our construction is based on the ring learning with errors assumption (\(\mathsf{RLWE}\)) as well as new untested assumptions on NTRU rings.
> 
> We provide a detailed security analysis and discuss why previously known attacks in the context of multilinear maps, especially zeroizing and annihilation attacks, do not appear to apply to our setting. We caution that our construction must yet be subject to rigorous cryptanalysis by the community before confidence can be gained in its security. However, we believe that the significant departure from known multilinear map based constructions opens up a new and potentially fruitful direction to explore in the quest for \(\mathsf{iO}\).
> 
> Our construction is based entirely on lattices, due to which one may hope for post quantum security. Note that this feature is not enjoyed by instantiations that make any use of bilinear maps even if secure instances of weak PRGs, as identified by the present work, the follow-up by Lin and Matt [69] and the independent work by Ananth, Jain and Sahai [9] are found.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_7](https://doi.org/10.1007/978-3-030-17653-2_7)
## Sum-of-Squares Meets Program Obfuscation, Revisited.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#sum-of-squares-meets-program-obfuscation-revisited)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#sum-of-squares-meets-program-obfuscation-revisited)
### Authors
* Boaz Barak, Harvard University, Cambridge, USA
* Samuel B. Hopkins, University of California, Berkeley, USA
* Aayush Jain, University of California, Los Angeles, USA
* Amit Sahai, University of California, Los Angeles, USA
* Pravesh Kothari, Princeton University and the Institute for Advanced Study, Princeton, USA
### Abstract
> We develop attacks on the security of variants of pseudo-random generators computed by quadratic polynomials. In particular we give a general condition for breaking the one-way property of mappings where every output is a quadratic polynomial (over the reals) of the input. As a corollary, we break the degree-2 candidates for security assumptions recently proposed for constructing indistinguishability obfuscation by Ananth, Jain and Sahai (ePrint 2018) and Agrawal (ePrint 2018). We present conjectures that would imply our attacks extend to a wider variety of instances, and in particular offer experimental evidence that they break assumption of Lin-Matt (ePrint 2018).
> 
> Our algorithms use semidefinite programming, and in particular, results on low-rank recovery (Recht, Fazel, Parrilo 2007) and matrix completion (Gross 2009).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_8](https://doi.org/10.1007/978-3-030-17653-2_8)
## How to Leverage Hardness of Constant-Degree Expanding Polynomials over \mathbb R R to build i풪 i O.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#how-to-leverage-hardness-of-constant-degree-expanding-polynomials-over-mathbb-r-r-to-build-i-i-o)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#how-to-leverage-hardness-of-constant-degree-expanding-polynomials-over-mathbb-r-r-to-build-i-i-o)
### Authors
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Huijia Lin, University of Washington, Seattle, USA
* Christian Matt, Concordium, Zurich, Switzerland
### Abstract
> In this work, we introduce and construct D-restricted Functional Encryption (FE) for any constant \(D \ge 3\), based only on the SXDH assumption over bilinear groups. This generalizes the notion of 3-restricted FE recently introduced and constructed by Ananth et al. (ePrint 2018) in the generic bilinear group model.
> 
> A \(D=(d+2)\)-restricted FE scheme is a secret key FE scheme that allows an encryptor to efficiently encrypt a message of the form \(M=(\varvec{x},\varvec{y},\varvec{z})\). Here, \(\varvec{x}\in \mathbb {F}_{\mathbf {p}}^{d\times n}\) and \(\varvec{y},\varvec{z}\in \mathbb {F}_{\mathbf {p}}^n\). Function keys can be issued for a function \(f=\varSigma _{\varvec{I}= (i_1,..,i_d,j,k)}\ c_{\varvec{I}}\cdot \varvec{x}[1,i_1] \cdots \varvec{x}[d,i_d] \cdot \varvec{y}[j]\cdot \varvec{z}[k]\) where the coefficients \(c_{\varvec{I}}\in \mathbb {F}_{\mathbf {p}}\). Knowing the function key and the ciphertext, one can learn \(f(\varvec{x},\varvec{y},\varvec{z})\), if this value is bounded in absolute value by some polynomial in the security parameter and n. The security requirement is that the ciphertext hides \(\varvec{y}\) and \(\varvec{z}\), although it is not required to hide \(\varvec{x}\). Thus \(\varvec{x}\) can be seen as a public attribute.
> 
> D-restricted FE allows for useful evaluation of constant-degree polynomials, while only requiring the SXDH assumption over bilinear groups. As such, it is a powerful tool for leveraging hardness that exists in constant-degree expanding families of polynomials over \(\mathbb {R}\). In particular, we build upon the work of Ananth et al. to show how to build indistinguishability obfuscation (\(i\mathcal {O}\)) assuming only SXDH over bilinear groups, LWE, and assumptions relating to weak pseudorandom properties of constant-degree expanding polynomials over \(\mathbb {R}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_9](https://doi.org/10.1007/978-3-030-17653-2_9)
## XOR-Counts and Lightweight Multiplication with Fixed Elements in Binary Finite Fields.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#xor-counts-and-lightweight-multiplication-with-fixed-elements-in-binary-finite-fields)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#xor-counts-and-lightweight-multiplication-with-fixed-elements-in-binary-finite-fields)
### Authors
* Lukas Kölsch, University of Rostock, Rostock, Germany
### Abstract
> XOR-metrics measure the efficiency of certain arithmetic operations in binary finite fields. We prove some new results about two different XOR-metrics that have been used in the past. In particular, we disprove a conjecture from [10]. We consider implementations of multiplication with one fixed element in a binary finite field. Here we achieve a complete characterization of all elements whose multiplication matrix can be implemented using exactly 2 XOR-operations, confirming a conjecture from [2]. Further, we provide new results and examples in more general cases, showing that significant improvements in implementations are possible.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_10](https://doi.org/10.1007/978-3-030-17653-2_10)
## DLCT: A New Tool for Differential-Linear Cryptanalysis.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#dlct-a-new-tool-for-differential-linear-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#dlct-a-new-tool-for-differential-linear-cryptanalysis)
### Authors
* Achiya Bar-On, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Ariel Weizman, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
### Abstract
> Differential cryptanalysis and linear cryptanalysis are the two best-known techniques for cryptanalysis of block ciphers. In 1994, Langford and Hellman introduced the differential-linear (DL) attack based on dividing the attacked cipher E into two subciphers \(E_0\) and \(E_1\) and combining a differential characteristic for \(E_0\) with a linear approximation for \(E_1\) into an attack on the entire cipher E. The DL technique was used to mount the best known attacks against numerous ciphers, including the AES finalist Serpent, ICEPOLE, COCONUT98, Chaskey, CTC2, and 8-round DES.
> 
> Several papers aimed at formalizing the DL attack, and formulating assumptions under which its complexity can be estimated accurately. These culminated in a recent work of Blondeau, Leander, and Nyberg (Journal of Cryptology, 2017) which obtained an accurate expression under the sole assumption that the two subciphers \(E_0\) and \(E_1\) are independent.
> 
> In this paper we show that in many cases, dependency between the two subcipher s significantly affects the complexity of the DL attack, and in particular, can be exploited by the adversary to make the attack more efficient. We present the Differential-Linear Connectivity Table (DLCT) which allows us to take into account the dependency between the two subciphers, and to choose the differential characteristic in \(E_0\) and the linear approximation in \(E_1\) in a way that takes advantage of this dependency. We then show that the DLCT can be constructed efficiently using the Fast Fourier Transform. Finally, we demonstrate the strength of the DLCT by using it to improve differential-linear attacks on ICEPOLE and on 8-round DES, and to explain published experimental results on Serpent and on the CAESAR finalist Ascon which did not comply with the standard differential-linear framework.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_11](https://doi.org/10.1007/978-3-030-17653-2_11)
## Linear Equivalence of Block Ciphers with Partial Non-Linear Layers: Application to LowMC.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#linear-equivalence-of-block-ciphers-with-partial-non-linear-layers-application-to-lowmc)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#linear-equivalence-of-block-ciphers-with-partial-non-linear-layers-application-to-lowmc)
### Authors
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Daniel Kales, Graz University of Technology, Graz, Austria
* Sebastian Ramacher, Graz University of Technology, Graz, Austria
* Christian Rechberger, Graz University of Technology, Graz, Austria
* Angela Promitzer, Graz, Austria
### Abstract
> \(\textsc {LowMC}\) is a block cipher family designed in 2015 by Albrecht et al. It is optimized for practical instantiations of multi-party computation, fully homomorphic encryption, and zero-knowledge proofs. \(\textsc {LowMC}\) is used in the \(\textsc {Picnic}\) signature scheme, submitted to NIST’s post-quantum standardization project and is a substantial building block in other novel post-quantum cryptosystems. Many \(\textsc {LowMC}\) instances use a relatively recent design strategy (initiated by Gérard et al. at CHES 2013) of applying the non-linear layer to only a part of the state in each round, where the shortage of non-linear operations is partially compensated by heavy linear algebra. Since the high linear algebra complexity has been a bottleneck in several applications, one of the open questions raised by the designers was to reduce it, without introducing additional non-linear operations (or compromising security).
> 
> In this paper, we consider \(\textsc {LowMC}\) instances with block size n, partial non-linear layers of size \(s \le n\) and r encryption rounds. We redesign LowMC’s linear components in a way that preserves its specification, yet improves LowMC’s performance in essentially every aspect. Most of our optimizations are applicable to all SP-networks with partial non-linear layers and shed new light on this relatively new design methodology.
> 
> Our main result shows that when \(s < n\), each \(\textsc {LowMC}\) instance belongs to a large class of equivalent instances that differ in their linear layers. We then select a representative instance from this class for which encryption (and decryption) can be implemented much more efficiently than for an arbitrary instance. This yields a new encryption algorithm that is equivalent to the standard one, but reduces the evaluation time and storage of the linear layers from \(r \cdot n^2\) bits to about \(r \cdot n^2 - (r-1)(n-s)^2\). Additionally, we reduce the size of LowMC’s round keys and constants and optimize its key schedule and instance generation algorithms. All of these optimizations give substantial improvements for small s and a reasonable choice of r. Finally, we formalize the notion of linear equivalence of block ciphers and prove the optimality of some of our results.
> 
> Comprehensive benchmarking of our optimizations in various \(\textsc {LowMC}\) applications (such as \(\textsc {Picnic}\)) reveals improvements by factors that typically range between 2x and 40x in runtime and memory consumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_12](https://doi.org/10.1007/978-3-030-17653-2_12)
## Distributed Differential Privacy via Shuffling.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#distributed-differential-privacy-via-shuffling)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#distributed-differential-privacy-via-shuffling)
### Authors
* Albert Cheu, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Jonathan Ullman, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Adam Smith, Computer Science Department, Boston University, Boston, USA
* David Zeber, Mozilla Foundation, Mountain View, USA
* Maxim Zhilyaev, Mountain View, USA
### Abstract
> We consider the problem of designing scalable, robust protocols for computing statistics about sensitive data. Specifically, we look at how best to design differentially private protocols in a distributed setting, where each user holds a private datum. The literature has mostly considered two models: the “central” model, in which a trusted server collects users’ data in the clear, which allows greater accuracy; and the “local” model, in which users individually randomize their data, and need not trust the server, but accuracy is limited. Attempts to achieve the accuracy of the central model without a trusted server have so far focused on variants of cryptographic multiparty computation (MPC), which limits scalability.
> 
> In this paper, we initiate the analytic study of a shuffled model for distributed differentially private algorithms, which lies between the local and central models. This simple-to-implement model, a special case of the ESA framework of [5], augments the local model with an anonymous channel that randomly permutes a set of user-supplied messages. For sum queries, we show that this model provides the power of the central model while avoiding the need to trust a central server and the complexity of cryptographic secure function evaluation. More generally, we give evidence that the power of the shuffled model lies strictly between those of the central and local models: for a natural restriction of the model, we show that shuffled protocols for a widely studied selection problem require exponentially higher sample complexity than do central-model protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_13](https://doi.org/10.1007/978-3-030-17653-2_13)
## Lower Bounds for Differentially Private RAMs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#lower-bounds-for-differentially-private-rams)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#lower-bounds-for-differentially-private-rams)
### Authors
* Giuseppe Persiano, Google LLC, Mountain View, USA
* Kevin Yeo, Google LLC, Mountain View, USA
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
### Abstract
> In this work, we study privacy-preserving storage primitives that are suitable for use in data analysis on outsourced databases within the differential privacy framework. The goal in differentially private data analysis is to disclose global properties of a group without compromising any individual’s privacy. Typically, differentially private adversaries only ever learn global properties. For the case of outsourced databases, the adversary also views the patterns of access to data. Oblivious RAM (ORAM) can be used to hide access patterns but ORAM might be excessive as in some settings it could be sufficient to be compatible with differential privacy and only protect the privacy of individual accesses.
> 
> We consider \((\epsilon ,\delta )\)-Differentially Private RAM, a weakening of ORAM that only protects individual operations and seems better suited for use in data analysis on outsourced databases. As differentially private RAM has weaker security than ORAM, there is hope that we can bypass the \(\varOmega (\log (nb/c))\) bandwidth lower bounds for ORAM by Larsen and Nielsen [CRYPTO ’18] for storing an array of n b-bit entries and a client with c bits of memory. We answer in the negative and present an \(\varOmega (\log (nb/c))\) bandwidth lower bound for privacy budgets of \(\epsilon = O(1)\) and \(\delta \le 1/3\).
> 
> The information transfer technique used for ORAM lower bounds does not seem adaptable for use with the weaker security guarantees of differential privacy. Instead, we prove our lower bounds by adapting the chronogram technique to our setting. To our knowledge, this is the first work that uses the chronogram technique for lower bounds on privacy-preserving storage primitives.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_14](https://doi.org/10.1007/978-3-030-17653-2_14)
## Beyond Birthday Bound Secure MAC in Faulty Nonce Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#beyond-birthday-bound-secure-mac-in-faulty-nonce-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#beyond-birthday-bound-secure-mac-in-faulty-nonce-model)
### Authors
* Avijit Dutta, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Suprita Talnikar, Indian Statistical Institute, Kolkata, India
### Abstract
> Encrypt-then-MAC (EtM) is a popular mode for authenticated encryption (AE). Unfortunately, almost all designs following the EtM paradigm, including the AE suites for TLS, are vulnerable against nonce misuse. A single repetition of the nonce value reveals the hash key, leading to a universal forgery attack. There are only two authenticated encryption schemes following the EtM paradigm which can resist nonce misuse attacks, the GCM-RUP (CRYPTO-17) and the \(\mathsf {GCM/2}^{+} \) (INSCRYPT-12). However, they are secure only up to the birthday bound in the nonce respecting setting, resulting in a restriction on the data limit for a single key. In this paper we show that nEHtM, a nonce-based variant of EHtM (FSE-10) constructed using a block cipher, has a beyond birthday bound (BBB) unforgeable security that gracefully degrades under nonce misuse. We combine nEHtM with the CENC (FSE-06) mode of encryption using the EtM paradigm to realize a nonce-based AE, CWC+. CWC+ is very close (requiring only a few more xor operations) to the CWC AE scheme (FSE-04) and it not only provides BBB security but also gracefully degrading security on nonce misuse.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_15](https://doi.org/10.1007/978-3-030-17653-2_15)
## Tight Time-Memory Trade-Offs for Symmetric Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#tight-time-memory-trade-offs-for-symmetric-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#tight-time-memory-trade-offs-for-symmetric-encryption)
### Authors
* Joseph Jaeger, University of California, San Diego, La Jolla, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### Abstract
> Concrete security proofs give upper bounds on the attacker’s advantage as a function of its time/query complexity. Cryptanalysis suggests however that other resource limitations – most notably, the attacker’s memory – could make the achievable advantage smaller, and thus these proven bounds too pessimistic. Yet, handling memory limitations has eluded existing security proofs.
> 
> This paper initiates the study of time-memory trade-offs for basic symmetric cryptography. We show that schemes like counter-mode encryption, which are affected by the Birthday Bound, become more secure (in terms of time complexity) as the attacker’s memory is reduced.
> 
> One key step of this work is a generalization of the Switching Lemma: For adversaries with S bits of memory issuing q distinct queries, we prove an n-to-n bit random function indistinguishable from a permutation as long as \(S \times q \ll 2^n\). This result assumes a combinatorial conjecture, which we discuss, and implies right away trade-offs for deterministic, stateful versions of CTR and OFB encryption.
> 
> We also show an unconditional time-memory trade-off for the security of randomized CTR based on a secure PRF. Via the aforementioned conjecture, we extend the result to assuming a PRP instead, assuming only one-block messages are encrypted.
> 
> Our results solely rely on standard PRF/PRP security of an underlying block cipher. We frame the core of our proofs within a general framework of indistinguishability for streaming algorithms which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_16](https://doi.org/10.1007/978-3-030-17653-2_16)
## Non-Malleable Codes Against Bounded Polynomial Time Tampering.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#non-malleable-codes-against-bounded-polynomial-time-tampering)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#non-malleable-codes-against-bounded-polynomial-time-tampering)
### Authors
* Marshall Ball, Columbia University, New York, USA
* Tal Malkin, Columbia University, New York, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Mukul Kulkarni, University of Maryland, College Park, USA
* Huijia Lin, University of Washington, Seattle, USA
### Abstract
> We construct efficient non-malleable codes (NMC) that are (computationally) secure against tampering by functions computable in any fixed polynomial time. Our construction is in the plain (no-CRS) model and requires the assumptions that (1) \(\mathbf {E}\) is hard for \(\mathbf {NP}\) circuits of some exponential \(2^{\beta n}\) (\(\beta >0\)) size (widely used in the derandomization literature), (2) sub-exponential trapdoor permutations exist, and (3) \(\mathbf {P}\)-certificates with sub-exponential soundness exist.
> 
> While it is impossible to construct NMC secure against arbitrary polynomial-time tampering (Dziembowski, Pietrzak, Wichs, ICS ’10), the existence of NMC secure against \(O(n^c)\)-time tampering functions (for any fixed c), was shown (Cheraghchi and Guruswami, ITCS ’14) via a probabilistic construction. An explicit construction was given (Faust, Mukherjee, Venturi, Wichs, Eurocrypt ’14) assuming an untamperable CRS with length longer than the runtime of the tampering function. In this work, we show that under computational assumptions, we can bypass these limitations. Specifically, under the assumptions listed above, we obtain non-malleable codes in the plain model against \(O(n^c)\)-time tampering functions (for any fixed c), with codeword length independent of the tampering time bound.
> 
> Our new construction of NMC draws a connection with non-interactive non-malleable commitments. In fact, we show that in the NMC setting, it suffices to have a much weaker notion called quasi non-malleable commitments—these are non-interactive, non-malleable commitments in the plain model, in which the adversary runs in \(O(n^c)\)-time, whereas the honest parties may run in longer (polynomial) time. We then construct a 4-tag quasi non-malleable commitment from any sub-exponential OWF and the assumption that \(\mathbf {E}\) is hard for some exponential size \(\mathbf {NP}\)-circuits, and use tag amplification techniques to support an exponential number of tags.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_17](https://doi.org/10.1007/978-3-030-17653-2_17)
## Continuous Non-Malleable Codes in the 8-Split-State Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#continuous-non-malleable-codes-in-the-8-split-state-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#continuous-non-malleable-codes-in-the-8-split-state-model)
### Authors
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Erick Purwanto, National University of Singapore, Singapore, Singapore
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### Abstract
> Non-malleable codes (NMCs), introduced by Dziembowski, Pietrzak and Wichs [20], provide a useful message integrity guarantee in situations where traditional error-correction (and even error-detection) is impossible; for example, when the attacker can completely overwrite the encoded message. NMCs have emerged as a fundamental object at the intersection of coding theory and cryptography. In particular, progress in the study of non-malleable codes and the related notion of non-malleable extractors has led to new insights and progress on even more fundamental problems like the construction of multi-source randomness extractors. A large body of the recent work has focused on various constructions of non-malleable codes in the split-state model. Many variants of NMCs have been introduced in the literature, e.g., strong NMCs, super strong NMCs and continuous NMCs. The most general, and hence also the most useful notion among these is that of continuous non-malleable codes, that allows for continuous tampering by the adversary. We present the first efficient information-theoretically secure continuously non-malleable code in the constant split-state model. We believe that our main technical result could be of independent interest and some of the ideas could in future be used to make progress on other related questions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_18](https://doi.org/10.1007/978-3-030-17653-2_18)
## Correlated-Source Extractors and Cryptography with Correlated-Random Tapes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#correlated-source-extractors-and-cryptography-with-correlated-random-tapes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#correlated-source-extractors-and-cryptography-with-correlated-random-tapes)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> In this paper, we consider the setting where a party uses correlated random tapes across multiple executions of a cryptographic algorithm. We ask if the security properties could still be preserved in such a setting. As examples, we introduce the notion of correlated-tape zero knowledge, and, correlated-tape multi-party computation, where, the zero-knowledge property, and, the ideal/real model security must still be preserved even if a party uses correlated random tapes in multiple executions.
> 
> Our constructions are based on a new type of randomness extractor which we call correlated-source extractors. Correlated-source extractors can be seen as a dual of non-malleable extractors, and, allow an adversary to choose several tampering functions which are applied to the randomness source. Correlated-source extractors guarantee that even given the output of the extractor on the tampered sources, the output on the original source is still uniformly random. Given (seeded) correlated-source extractors, and, resettably-secure computation protocols, we show how to directly get a positive result for both correlated-tape zero-knowledge and correlated-tape multi-party computation in the CRS model. This is tight considering the known impossibility results on cryptography with imperfect randomness.
> 
> Our main technical contribution is an explicit construction of a correlated-source extractor where the length of the seed is independent of the number of tamperings. Additionally, we also provide a (non-explicit) existential result for correlated source extractors with almost optimal parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_19](https://doi.org/10.1007/978-3-030-17653-2_19)
## Revisiting Non-Malleable Secret Sharing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#revisiting-non-malleable-secret-sharing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#revisiting-non-malleable-secret-sharing)
### Authors
* Saikrishna Badrinarayanan, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, UC Berkeley, Berkeley, USA
### Abstract
> A threshold secret sharing scheme (with threshold t) allows a dealer to share a secret among a set of parties such that any group of t or more parties can recover the secret and no group of at most \(t-1\) parties learn any information about the secret. A non-malleable threshold secret sharing scheme, introduced in the recent work of Goyal and Kumar (STOC’18), additionally protects a threshold secret sharing scheme when its shares are subject to tampering attacks. Specifically, it guarantees that the reconstructed secret from the tampered shares is either the original secret or something that is unrelated to the original secret.
> 
> In this work, we continue the study of threshold non-malleable secret sharing against the class of tampering functions that tamper each share independently. We focus on achieving greater efficiency and guaranteeing a stronger security property. We obtain the following results:
> 
> Rate Improvement. We give the first construction of a threshold non-malleable secret sharing scheme that has rate \(> 0\). Specifically, for every \(n,t \ge 4\), we give a construction of a t-out-of-n non-malleable secret sharing scheme with rate \(\varTheta (\frac{1}{t\log ^2 n})\). In the prior constructions, the rate was \(\varTheta (\frac{1}{n\log m})\) where m is the length of the secret and thus, the rate tends to 0 as \(m \rightarrow \infty \). Furthermore, we also optimize the parameters of our construction and give a concretely efficient scheme.
> 
> Multiple Tampering. We give the first construction of a threshold non-malleable secret sharing scheme secure in the stronger setting of bounded tampering wherein the shares are tampered by multiple (but bounded in number) possibly different tampering functions. The rate of such a scheme is \(\varTheta (\frac{1}{k^3t\log ^2 n})\) where k is an apriori bound on the number of tamperings. We complement this positive result by proving that it is impossible to have a threshold non-malleable secret sharing scheme that is secure in the presence of an apriori unbounded number of tamperings.
> 
> General Access Structures. We extend our results beyond threshold secret sharing and give constructions of rate-efficient, non-malleable secret sharing schemes for more general monotone access structures that are secure against multiple (bounded) tampering attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_20](https://doi.org/10.1007/978-3-030-17653-2_20)
## Multi-party Virtual State Channels.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#multi-party-virtual-state-channels)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#multi-party-virtual-state-channels)
### Authors
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Lisa Eckey, Technische Universität Darmstadt, Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Julia Hesse, Technische Universität Darmstadt, Darmstadt, Germany
* Kristina Hostáková, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> Smart contracts are self-executing agreements written in program code and are envisioned to be one of the main applications of blockchain technology. While they are supported by prominent cryptocurrencies such as Ethereum, their further adoption is hindered by fundamental scalability challenges. For instance, in Ethereum contract execution suffers from a latency of more than 15 s, and the total number of contracts that can be executed per second is very limited. State channel networks are one of the core primitives aiming to address these challenges. They form a second layer over the slow and expensive blockchain, thereby enabling instantaneous contract processing at negligible costs.
> 
> In this work we present the first complete description of a state channel network that exhibits the following key features. First, it supports virtual multi-party state channels, i.e. state channels that can be created and closed without blockchain interaction and that allow contracts with any number of parties. Second, the worst case time complexity of our protocol is constant for arbitrary complex channels. This is in contrast to the existing virtual state channel construction that has worst case time complexity linear in the number of involved parties. In addition to our new construction, we provide a comprehensive model for the modular design and security analysis of our construction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_21](https://doi.org/10.1007/978-3-030-17653-2_21)
## Aggregate Cash Systems: A Cryptographic Investigation of Mimblewimble.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#aggregate-cash-systems-a-cryptographic-investigation-of-mimblewimble)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#aggregate-cash-systems-a-cryptographic-investigation-of-mimblewimble)
### Authors
* Georg Fuchsbauer, Inria, Paris, France
* Michele Orrù, Inria, Paris, France
* Georg Fuchsbauer, École normale supérieure, CNRS, PSL, Paris, France
* Michele Orrù, École normale supérieure, CNRS, PSL, Paris, France
* Yannick Seurin, ANSSI, Paris, France
### Abstract
> Mimblewimble is an electronic cash system proposed by an anonymous author in 2016. It combines several privacy-enhancing techniques initially envisioned for Bitcoin, such as Confidential Transactions (Maxwell, 2015), non-interactive merging of transactions (Saxena, Misra, Dhar, 2014), and cut-through of transaction inputs and outputs (Maxwell, 2013). As a remarkable consequence, coins can be deleted once they have been spent while maintaining public verifiability of the ledger, which is not possible in Bitcoin. This results in tremendous space savings for the ledger and efficiency gains for new users, who must verify their view of the system.
> 
> In this paper, we provide a provable-security analysis for Mimblewimble. We give a precise syntax and formal security definitions for an abstraction of Mimblewimble that we call an aggregate cash system. We then formally prove the security of Mimblewimble in this definitional framework. Our results imply in particular that two natural instantiations (with Pedersen commitments and Schnorr or BLS signatures) are provably secure against inflation and coin theft under standard assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_22](https://doi.org/10.1007/978-3-030-17653-2_22)
## Proof-of-Stake Protocols for Privacy-Aware Blockchains.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#proof-of-stake-protocols-for-privacy-aware-blockchains)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#proof-of-stake-protocols-for-privacy-aware-blockchains)
### Authors
* Chaya Ganesh, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Concordium, Aarhus, Denmark
### Abstract
> Proof-of-stake (PoS) protocols are emerging as one of the most promising alternative to the wasteful proof-of-work (PoW) protocols for consensus in Blockchains (or distributed ledgers). However, current PoS protocols inherently disclose both the identity and the wealth of the stakeholders, and thus seem incompatible with privacy-preserving cryptocurrencies (such as ZCash, Monero, etc.). In this paper we initiate the formal study for PoS protocols with privacy properties. Our results include:
> 
> 1. A (theoretical) feasibility result showing that it is possible to construct a general class of private PoS (PPoS) protocols; and to add privacy to a wide class of PoS protocols,
> 
> 2. A privacy-preserving version of a popular PoS protocol, Ouroboros Praos.
> 
> Towards our result, we define the notion of anonymous verifiable random function, which we believe is of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_23](https://doi.org/10.1007/978-3-030-17653-2_23)
## Consensus Through Herding.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#consensus-through-herding)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#consensus-through-herding)
### Authors
* T.-H. Hubert Chan, The University of Hong Kong, Lung Fu Shan, Hong Kong
* Rafael Pass, Cornell and Thunder Research, New York, USA
* Elaine Shi, Cornell and Thunder Research, New York, USA
### Abstract
> State Machine Replication (SMR) is an important abstraction for a set of nodes to agree on an ever-growing, linearly-ordered log of transactions. In decentralized cryptocurrency applications, we would like to design SMR protocols that (1) resist adaptive corruptions; and (2) achieve small bandwidth and small confirmation time. All past approaches towards constructing SMR fail to achieve either small confirmation time or small bandwidth under adaptive corruptions (without resorting to strong assumptions such as the erasure model or proof-of-work).
> 
> We propose a novel paradigm for reaching consensus that departs significantly from classical approaches. Our protocol is inspired by a social phenomenon called herding, where people tend to make choices considered as the social norm. In our consensus protocol, leader election and voting are coalesced into a single (randomized) process: in every round, every node tries to cast a vote for what it views as the most popular item so far: such a voting attempt is not always successful, but rather, successful with a certain probability. Importantly, the probability that the node is elected to vote for v is independent from the probability it is elected to vote for \(v' \ne v\). We will show how to realize such a distributed, randomized election process using appropriate, adaptively secure cryptographic building blocks.
> 
> We show that amazingly, not only can this new paradigm achieve consensus (e.g., on a batch of unconfirmed transactions in a cryptocurrency system), but it also allows us to derive the first SMR protocol which, even under adaptive corruptions, requires only polylogarithmically many rounds and polylogarithmically many honest messages to be multicast to confirm each batch of transactions; and importantly, we attain these guarantees under standard cryptographic assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_24](https://doi.org/10.1007/978-3-030-17653-2_24)
